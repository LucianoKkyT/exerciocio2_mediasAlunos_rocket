let students = [
  {
    name: "João",
    nota1: 7,
    nota2: 6,
  },
  {
    name: "José",
    nota1: 8,
    nota2: 2,
  },
  {
    name: "Yan",
    nota1: 8,
    nota2: 8,
  },
  {
    name: "Théo",
    nota1: 9,
    nota2: 7,
  },
]

function calcMedia(student) {
  let media = (student.nota1 + student.nota2) / 2
  return media
}

function showMedia() {
  students.forEach((student) => {
    let message = ""
    if(calcMedia(student) >= 7) {
     message = `Parabéns ${student.name}, você foi aprovado no concurso!`
    }else {
     message = `Não foi dessa vez ${student.name}. Tente novamente!`
    }
    
    alert(`A média do aluno(a) ${student.name} é ${calcMedia(student)} \n ${message}`)
    
  })
  
}
showMedia()