<template>
    <form class="form" @submit.prevent="handleSubmit">
        <fieldset class="form__parent">
            <legend>Персональные данные</legend>
            <div class="containerInput">
                <label for="parentName">ФИО</label>
                <input type="text" id="parentName" v-model="data.nameParent" v-on:keypress="isLetter($event)">
            </div>
            <div class="containerInput">
                <label for="parentAge">Возраст</label>
                <input type="number" id="parentAge" v-model="data.ageParent" @input="validateAgeParent">
            </div>
        </fieldset>
        <fieldset class="form__child">
            <div class="form__child-header"> 
                <legend>Дети (Макс. 5)</legend>
                <button class="button button-transparent" @click="addChild" type="button" :class="{hidden: data.childs.length === 5} ">
                    <img src="../assets/image/plus.svg" alt="Добавить">
                </button>
            </div>
            <div class="form__child-field" v-for="(child, index) in data.childs" :key="index">
                <div class="containerInput">
                    <label for="childName">Имя</label>
                    <input type="text" name="childName" v-model="child.nameChild" v-on:keypress="isLetter($event)">
                </div>
                <div class="containerInput">
                    <label for="childAge">Возраст</label>
                    <input type="number" name="childAge" v-model="child.ageChild" @input="validateAgeChild(index)">
                </div>
                <button class="button-del-child" @click="delChild(index)" type="button">Удалить</button>
            </div>
        </fieldset>
        <input type="submit" class="button button-submit" value="Сохранить">
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useParentChildStore } from '@/stores/dataParentsChilds';
import { uid } from 'uid';


const dataParChild = useParentChildStore()

const data = ref({
        id: uid(),
        nameParent: '',
        ageParent: '',
        childs : [
          
        ]
      })

const addChild = () => {
    if (data.value.childs.length < 5){
        data.value.childs.push({
        nameChild: '',
        ageChild: '',
    })
    }
}

const delChild = (index) => {
    data.value.childs.splice(index, 1)
}

const handleSubmit = () => {
    if (data.value.nameParent.length != 0 &&  data.value.ageParent.length !=0 ) {
        dataParChild.addParentChild(data.value)
        data.value = {
        id: uid(),
        nameParent: '',
        ageParent: '',
        childs : []
      }
    }
}


const validateAgeParent = () => { 
    if (data.value.ageParent < 1) data.value.ageParent = 1
    if (data.value.ageParent > 100) data.value.ageParent = 100
}

const validateAgeChild = (index) => { 
    if (data.value.ageParent < data.value.childs[index].ageChild) data.value.childs[index].ageChild = data.value.ageParent
}


const isLetter = (e) => {
  let char = String.fromCharCode(e.keyCode);  
  if(/^[A-Za-zА-Яа-я]+$/.test(char)) return true;  
  else e.preventDefault(); 
}
</script>
