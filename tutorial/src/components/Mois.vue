<template>
<div>
    <div v-for="m in mois" :key="m.mois">{{ m.mois }}
      
           : {{m.days}}
        
    </div>
    
</div>
</template>
<script>
export default {
    name:"Mois", 
    data: ()=>{
        return {
            mois: Mois

        };
    }
    
};
const Mois=[
    { mois: 'Janvier', days: 1},
    { mois : 'Fervrier', days: 2},
    { mois : 'Mars', days :3},
    { mois : 'Avril', days: 4 },
    { mois : 'Mai', days: 5},
    { mois : 'Juin', days:6},
    { mois : 'Juillet', days:7 },
    { mois : 'Août', days:8},
    { mois : 'Septembre', days: 9},
    { mois : 'Octobre', days: 10},
    { mois : 'Novembre' ,days :11},
    { mois : 'Décembre' ,days: 12}
];



</script>>


<style  scoped>

</style>