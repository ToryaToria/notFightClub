const createBtn = document.querySelector('#create__btn');
// const myStorage = window.localStorage;
// console.log(nameField);


const headerBtnHome = document.querySelector('#header__btn-home');
const headerBtnCharacter = document.querySelector('#header__btn-character');
const headerBtnSettings = document.querySelector('#header__btn-settings');

const btnFight = document.querySelector('#btn-fight');
const btnAttack = document.querySelector('#btn-attack');
const btnEdit = document.querySelector('#btn-edit');

const create = document.querySelector('.create')
const home = document.querySelector('.home')
const character = document.querySelector('.character');
const settings = document.querySelector('.settings')
const battle = document.querySelector('.battle')

const nameField = document.querySelector('#name');
const nameSettingField = document.querySelector('#name-setting-field');

const nameHeroSettings= document.querySelector('#name-hero-settings')

let nameHero = '';

createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('name', nameField.value);
  nameHero = localStorage.getItem('name');
  console.log(nameHero);

  document.querySelector('#heroName').textContent = nameHero;
  document.querySelector('#heroNameBattle').textContent = nameHero;

    nameHeroSettings.textContent = nameHero;


  create.classList.add('closer');
  home.classList.add('open');

});

btnEdit.addEventListener('click', () => {
nameSettingField.classList.add('open');
nameHeroSettings.textContent = '';
  btnEdit.textContent = 'Save';

});

headerBtnHome.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('home');

  home.classList.add('open');
  character.classList.remove('open');
  settings.classList.remove('open');
  battle.classList.remove('open');

});

headerBtnCharacter.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('character');

  character.classList.add('open');
  home.classList.remove('open');
  settings.classList.remove('open');
  battle.classList.remove('open');

});

headerBtnSettings.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('settings');

  settings.classList.add('open');
  character.classList.remove('open');
  home.classList.remove('open');
  battle.classList.remove('open');

});

btnFight.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('battle');

  battle.classList.add('open');
  settings.classList.remove('open');
  character.classList.remove('open');
  home.classList.remove('open');
});

btnAttack.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('attack');
});