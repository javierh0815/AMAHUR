import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AsistenciaPage } from '../asistencia/asistencia.page';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  isModalOpen = false;
  parametroCamara:number | undefined;

  constructor(private router:Router,
              private helper:HelperService,
              private activaredRouter:ActivatedRoute,
              private auth:AngularFireAuth
              ) { }

  ngOnInit(){
    this.parametroCamara = this.activaredRouter.snapshot.params['idcam'];
    
    
  }

  

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

  botonAsistencia(){
    var bddCursos = [];
    bddCursos.push({
      asignatura: "ENG4567",
      docente: "Carlos Fernández",
      fecha: "24-09-2023",
      hora: "10:45",
      leccion: "Inglés Avanzado",
      sala: "Aula 205",
      seccion: "001D",
      },
      {
      asignatura: "HIS7890",
      docente: "Isabel Gómez",
      fecha: "25-09-2023",
      hora: "13:20",
      leccion: "Historia Contemporánea",
      sala: "Aula 301",
      seccion: "001D"
      },
      {
        asignatura: "BIO2345",
        docente: "Luis Ramírez",
        fecha: "26-09-2023",
        hora: "15:00",
        leccion: "Biología Celular",
        sala: "Laboratorio 7",
        seccion: "001D"
      },
      {
      asignatura: "CHE6789",
      docente: "Elena Torres",
      fecha: "27-09-2023",
      hora: "08:55",
      leccion: "Química Orgánica",
      sala: "Aula 110",
      seccion: "001D"
      },
      {
      asignatura: "ART1234",
      docente: "Pablo Martínez",
      fecha: "28-09-2023",
      hora: "12:10",
      leccion: "Arte Contemporáneo",
      sala: "Sala de Arte",
      seccion: "001D"
      },
      {
      asignatura: "ECON5678",
      docente: "Laura García",
      fecha: "29-09-2023",
      hora: "09:15",
      leccion: "Economía Internacional",
      sala: "Aula 303",
      seccion: "001D"
      },
      {
      asignatura: "PGY3456",
      docente: "Roberto Pérez",
      fecha: "30-09-2023",
      hora: "14:30",
      leccion: "Física Nuclear",
      sala: "Laboratorio 6",
      seccion: "001D"
      },
      {
      asignatura: "MKT9012",
      docente: "Sandra Fernández",
      fecha: "01-10-23",
      hora: "11:45",
      leccion: "Marketing Estratégico",
      sala: "Aula 108",
      seccion: "001D"
      },
      {
      asignatura: "HIS1234",
      docente: "Pedro Sánchez",
      fecha: "02-10-2023",
      hora: "16:05",
      leccion: "Historia Antigua",
      sala: "Aula 201",
      seccion: "001D"
      },
      {
      asignatura: "CS4567",
      docente: "Sofía López",
      fecha: "03-10-2023",
      hora: "10:00",
      leccion: "Ciencias de la Computación",
      sala: "Laboratorio 4",
      seccion: "001D"
      },
      {
      asignatura: "LIT7890",
      docente: "Marta Fernández",
      fecha: "04-10-2023",
      hora: "13:45",
      leccion: "Literatura Universal",
      sala: "Aula 306",
      seccion: "001D"
      },
      {
      asignatura: "ECO1234",
      docente: "Andrés Gómez",
      fecha: "05-10-2023",
      hora: "09:30",
      leccion: "Economía Microeconómica",
      sala: "Aula 109",
      seccion: "001D"
      },
      {
      asignatura: "CHE5678",
      docente: "Lucía Rodríguez",
      fecha: "06-10-2023",
      hora: "15:20",
      leccion: "Química Orgánica",
      sala: "Laboratorio 8",
      seccion: "001D"
      },
      {
      asignatura: "ART9012",
      docente: "Diego Pérez",
      fecha: "07-10-2023",
      hora: "11:10",
      leccion: "Historia del Arte",
      sala: "Sala de Arte",
      seccion: "001D"
      },
      {
      asignatura: "MKT2345",
      docente: "Natalia Martínez",
      fecha: "08-10-2023",
      hora: "16:45",
      leccion: "Investigación de Mercados",
      sala: "Aula 112",
      seccion: "001D"
      });
      const regMalla = {datosMalla:bddCursos};
      this.helper.showModal(AsistenciaPage,regMalla);
  }

  

}
