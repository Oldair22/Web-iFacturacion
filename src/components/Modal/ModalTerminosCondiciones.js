import React from 'react';
import { Button, Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
class ModalTerminos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <section>
        <a color="primary" size="lg" onClick={this.toggle}>
          Acepto Terminos y condiciones
          </a>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Términos y Condiciones de Uso del Sitio Web IFacturacion.pe</ModalHeader> 
            <ModalBody>
            Condiciones de Uso:
            Como usuario del sitio web (IFacturacion.pe) se compromete a leer detenidamente los términos y condiciones generales, antes de utilizar el servicio web que ofrece la empresa de facturación. AL USAR EL SITIO WEB USTED ACEPTA Y ESTA DE ACUERDO CON ESTOS TÉRMINOS Y CONDICIONES EN LO QUE SE REFIERE A SU USO DEL SITIO WEB. En caso de no aceptarlos, se le solicita que no haga uso, ni acceda, ni manipule la información de los servicios ofrecidos por el sitio web, ya que usted (usuario) está haciendo uso inadecuado de éste.
              <ul>
                <li><h3>1.	Derechos de Propiedad Intelectual:</h3>
                  El aspecto y el diseño del SERVICIO están protegido. El CLIENTE no puede duplicar, copiar, reutilizar cualquier parte del código, estructura, procedimiento, HTML / CSS o elementos de diseño visual sin el permiso expreso y por escrito de IFACTURACION.PE. Usted acepta y acuerda que el SERVICIO y cualquier software necesario usado en relación con el SERVICIO, incluyendo cualquier mejora, modificación y actualización al mismo contienen información confidencial y es de propiedad de IFACTURACION.PE. El CLIENTE acuerda no copiar, modificar, crear trabajos derivados, realizar ingeniería inversa, desarmar o de lo contrario, intentar descubrir cualquier código fuente, vender, ceder,  otorgar un interés de seguridad o transferir cualquier derecho en el Software, en su totalidad o en parte.
                  </li>
                <li><h3>2.	Garantía de Seguridad</h3>
                      El PROVEEDOR es responsable de la seguridad, fiabilidad e integridad de los datos almacenados en IFACTURACION.PE. 

                      SEGURIDAD SSL: Toda la información que viaja entre EL CLIENTE a IFACTURACION.PE o viceversa está protegido con el cifrado SSL de 256 bits. 

                      CONFIDENCIALIDAD: Toda la información que viaja entre EL CLIENTE a IFACTURACION.PE o viceversa está protegido con controles ISO27001. SEGURIDAD FÍSICA: Los servidores IFACTURACION.PE se encuentran en los mejores centros de datos del mundo, proporciona controles para proteger la información y los servidores.
                      </li>
                <li><h3>3.	Confidencialidad </h3>
                En conformidad con la Ley de Protección de Datos, Ley N° 29733, EL PROVEEDOR se obliga a mantener estricta confidencialidad sobre todo tipo de información perteneciente a EL CLIENTE. Esta obligación es válida aún después del término de la prestación del servicio, en tal sentido EL PROVEEDOR entiende que toda la información a ser ingresada a su SERVICIO es de carácter CONFIDENCIAL obligándose a no usar indebidamente dicha información ya sea directamente o a través de terceros o ponerlo en conocimiento de terceros. Culminado el contrato, la información se eliminará totalmente del DataCenter de EL PROVEEDOR.
                </li>
                <li>
                <h3>4.	Obligaciones del Proveedor</h3>
		<ul>               
 <li>Garantizar que el SERVICIO se ofrezca en un 99.9% de disponibilidad. Tener en cuenta nuestra GARANTÍA DE SEGURIDAD.</li>
                <li>Soporte ESTÁNDAR (L-V 9:00am hasta 6:00pm) por medio de TICKETS.</li>
                <li>Actualización y corrección de errores del SERVICIO sin costo adicional.</li>
                <li>Emisión y generación de los XML y PDF.</li>
                <li>Envío a la SUNAT de un ejemplar del XML.</li>
                <li> Recepción de las CDR que envíe la SUNAT.</li>
                <li>Validar los documentos según parámetros exigidos por SUNAT.</li>
                </ul>
		</li>
                <li>
                <h3>5.	Obligaciones del Cliente</h3>
			<ul>                
			<li>Comunicar al PROVEEDOR el nombre, documento de identidad y email de la persona natural que cumplirá la función de ser EL RESPONSABLE.</li>
                	<li>Pagar oportunamente las Órdenes de Pago emitidas por EL PROVEEDOR por el uso del SERVICIO, como máximo dentro de los 10 días calendario de ser emitido. IFACTURACION.PE reportará el incumplimiento de pago a las centrales de riesgo.</li>
                	<li>Informar a IFACTURACION.PE el cambio del responsable o custodio asignado.</li>
                	<li>Comunicar a IFACTURACION.PE si emitió COMPROBANTES ELECTRÓNICOS con anterioridad, para evitar duplicidad de documentos. La SUNAT rechazará los documentos duplicados.</li>
                	</ul>
		</li>
                <li>
               <h3> 6.	Documentos Electrónicos a Generar/ Validar</h3>
                  Para efectos de la prestación de este servicio, se tendrá los siguientes documentos electrónicos que podrán ser generados:
			<ul>                  
			<li>Factura Electrónica</li>
                  <li>Boleta de Venta Electrónica</li>
                  <li>Nota de Crédito Electrónica</li>
                  <li>Nota de Débito Electrónica</li>
                  <li>Generación de Resúmenes de Boleta de Venta</li> 
                  <li>Comunicaciones de Baja</li>
                  <li>Guías de Remisión</li>
                  <li>Comprobantes de Retención</li>
                  <li>Comprobantes de Percepción</li>
                  <li>Recibo de Servicios</li>
		</ul>
                </li>
		<li>
		<h3>7.	Modificación de términos y Condiciones </h3>
		IFacturacion se reserva el derecho, a su sola discreción, de cambiar, modificar, añadir o quitar cualquier porción de los Términos y Condiciones, toda o en parte, en cualquier momento. El usuario estará obligado a sujetarse a dichas notificaciones, una vez que éstas entren en vigor. 	
		</li>
		<li>
		<h3>8.	Delimitación de responsabilidades </h3> 
		IFacturacion no se ha responsable de ninguna pérdida de información, ni del manejo inadecuado del servicio por parte del usuario.
 
		</li>
		<li>
			<h3>9.	Manejo de datos</h3> 
		Se entenderá que el usuario consiente el tratamiento de sus datos personales, autorizando respectivamente a IFacturacion, estos datos personales se mantendrán en el banco de datos con la finalidad de enviar información relacionada y compartir los datos personales a empresas pertenecientes al grupo.
		
			
		</li>		


              </ul>
		Atentamente,
		IFacturacion.pe 
            </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </section>
    );
  }
}

export default ModalTerminos;
