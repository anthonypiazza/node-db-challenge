const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
    findProjects,
    findTasks,
    findResources,
    addProjects,
    addTasks,
    addResources
}

function findProjects(){
    return db('projects')
        .then(proj => {
            const newArr = [];
            for(let i = 0; i < proj.length; i++){
                if(proj[i].completed === 0){
                    newArr.push({...proj[i], completed: false});
                }else{
                    newArr.push({...proj[i], completed: true});
                }
            }
            return newArr;
        });
}

function findTasks(){
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.name as ProjectName', 'projects.description as ProjectDescription', 'tasks.description', 'tasks.notes', 'tasks.completed')
        .then(task => {
            const newArr = [];
            for(let i = 0; i < task.length; i++){
                if(task[i].completed === 0){
                    newArr.push({...task[i], completed: false});
                }else{
                    newArr.push({...task[i], completed: true});
                }
            }
            return newArr;
        });;
}

function findResources(){
    return db('resources');
}

function addProjects(project){
    return db('projects')
        .insert(project);
}


function addTasks(task){
    return db('tasks')
        .insert(task);
}

function addResources(resource){
    return db('resources')
        .insert(resource);
}



//QUERY EXAMPLE JOIN FORMAT
// function findSteps(id){
//     return db('schemes')
//         .join('steps', 'schemes.id', 'steps.scheme_id')
//         .where('steps.scheme_id', '=', id )
//         .select('schemes.id','schemes.scheme_name', 'steps.step_number', 'steps.instructions')      
//         .orderBy('steps.step_number');
// }