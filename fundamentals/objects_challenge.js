const cohort = {
    name: 'Dec 2022',
    id: 3452,
    students: ['Nneji', 'Maxine', 'Sam']
};

const listCohort = (cohort) => {
    console.log(`<${cohort.id}> - <${cohort.name} - <${cohort.students.length}> students in this cohort`)
};

listCohort(cohort)