"use strict";

const fs=require("fs");

function fileToArray(fileName)
{
  return fs.readFileSync(__dirname+"/"+fileName,"utf8")
    .split("\n")
    .map(animal => animal.toLowerCase().trim().replace(" ","-"))
    .filter(a => a!="");
}

const animals=fileToArray("animals.txt");
const adjectives=fileToArray("adjectives.txt");

function generateName()
{
  return adjectives[Math.round(Math.random()*adjectives.length)]+"-"+animals[Math.round(Math.random()*animals.length)];
}

function generateNameList(n)
{
  const arr=[];
  for(let i=0;i<n;i++)
    arr.push(generateName());
  return arr;
}

module.exports.generateName=generateName;
module.exports.generateNameList=generateNameList;