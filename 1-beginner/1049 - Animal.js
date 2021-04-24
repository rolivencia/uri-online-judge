// 1049 - Animal
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1049

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [phylum, group, eating] = input.split('\n');

const tree = {
    vertebrado : {
        ave:{
            carnivoro: "aguia",
            onivoro: "pomba"
        },
        mamifero: {
            onivoro: "homem",
            herbivoro: "vaca"
        }
    },
    invertebrado: {
        inseto: {
            hematofago: "pulga",
            herbivoro: "lagarta"
        },
        anelideo: {
            hematofago: "sanguessuga",
            onivoro: "minhoca"
        }
    }
}

console.log(tree[phylum][group][eating]);