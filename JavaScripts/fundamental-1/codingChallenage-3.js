const Dolpines_Scores_1 = 97; const Dolpines_Scores_2 = 112; const Dolpines_Scores_3 = 101;
const koalas_Scores_1 = 109; const koalas_Scores_2 = 95; const koalas_Scores_3 = 106;
const Dolpies_avg = (Dolpines_Scores_1 + Dolpines_Scores_2 + Dolpines_Scores_3) / 3;
const koalas_avg = (koalas_Scores_1 + koalas_Scores_2 + koalas_Scores_3) / 3;
const score = (Dolpies_avg + koalas_avg) / 2
if (Dolpies_avg > koalas_avg && Dolpies_avg > 100) {
    console.log("Dolphines Team win the match :)");
} else if (Dolpies_avg < koalas_avg && koalas_avg > 100) {
    console.log("Koalas Team win the match :)");
}
else if (Dolpies_avg == koalas_avg && score > 100) {
    console.log("The match was draw no one win ;(");
}
else {
    console.log("logical error")
}
