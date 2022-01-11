import React, { useState, useEffect } from 'react';
import produce from "immer"
import { Tree } from 'antd';
import './App.css';

const initTreeData = [];

function initTree(films) {
  return films.map((film) => ({
    key: `film-${film.episode_id}`,
    title: film.title,
    children: film.characters.map((url) => ({
      key: `film-${film.episode_id}-character-${url}`,
      isLeaf: true,
      dataUrl: url,
    })),
  }));
}

async function loadCharacter(node) {
  const res = await fetch(node.dataUrl);
  const data = await res.json();
  return { key: node.key, title: data.name, isLeaf: true };
}

async function loadChildren(treeData, filmKey, children) {
  return produce(treeData, async (draft) => {
    const node = draft.find((n) => n.key === filmKey);
    node.children = await Promise.all(children.map(loadCharacter));
  });
}

export default function Demo() {
  const [treeData, setTreeData] = useState(initTreeData);

  useEffect(() => {
    async function flow() {
      const res = await fetch('https://swapi.py4e.com/api/films/');
      const data = await res.json();
      setTreeData(initTree(data.results));
    };
    flow();
  }, []);

  const onLoadData = async ({ key, children }) => {
    const newTreeData = await loadChildren(treeData, key, children);
    setTreeData(newTreeData);
  };

  return (
    <Tree loadData={onLoadData} treeData={treeData} />
  );
}


