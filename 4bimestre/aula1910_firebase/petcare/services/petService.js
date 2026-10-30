import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc
} from 'firebase/firestore';

import { auth, db } from '../firebase/firebase';

export async function cadastrarPet(dados) {
  const usuario = auth.currentUser;

  if (!usuario) {
    throw new Error('Você precisa estar logado.');
  }

  const referencia = await addDoc(
    collection(db, 'pets'),
    {
      ...dados,
      usuarioId: usuario.uid,
      criadoEm: serverTimestamp()
    }
  );

  return referencia.id;
}

export async function listarPets() {
  const usuario = auth.currentUser;

  if (!usuario) {
    throw new Error('Usuário não autenticado.');
  }

  const consulta = query(
    collection(db, 'pets'),
    where('usuarioId', '==', usuario.uid)
  );

  const resultado = await getDocs(consulta);

  return resultado.docs.map(documento => ({
    ...documento.data(),
    id: documento.id
  }));
}

export async function buscarPetPorId(petId) {
  const usuario = auth.currentUser;

  if (!usuario) {
    throw new Error('Usuário não autenticado.');
  }

  const referencia = doc(db, 'pets', petId);
  const resultado = await getDoc(referencia);

  if (!resultado.exists()) {
    throw new Error('Pet não encontrado.');
  }

  const dados = resultado.data();

  if (dados.usuarioId !== usuario.uid) {
    throw new Error('Você não tem permissão para acessar este pet.');
  }

  return {
    ...dados,
    id: resultado.id
  };
}

export async function atualizarPet(petId, dadosAtualizados) {
  const usuario = auth.currentUser;

  if (!usuario) {
    throw new Error('Usuário não autenticado.');
  }

  const referencia = doc(db, 'pets', petId);
  const resultado = await getDoc(referencia);

  if (!resultado.exists()) {
    throw new Error('Pet não encontrado.');
  }

  if (resultado.data().usuarioId !== usuario.uid) {
    throw new Error('Você não tem permissão para editar este pet.');
  }

  // Atualizamos apenas os campos permitidos.
  // O usuarioId e a data de criação permanecem intactos.
  const {
    nome,
    especie,
    raca,
    idade,
    peso,
    statusVacinas
  } = dadosAtualizados;

  await updateDoc(referencia, {
    nome,
    especie,
    raca,
    idade,
    peso,
    statusVacinas,
    atualizadoEm: serverTimestamp()
  });
}


