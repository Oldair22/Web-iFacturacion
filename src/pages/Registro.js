import React from 'react';
import Formulario from '../components/FormularioRegistrar';
import NavProgreso from '../components/NavbarRegistro'; 
import api from '../api';
import apiRUC from '../apiConsulta';
import {Row,Col} from 'reactstrap';

class Registro extends React.Component{ 
    state={
        loading:false,
        error:null,
        form:{
            ruc:'',
            cliente:'',
            email:'',
            telefono:'',
            ContrasenNueva:'',
            contacto:'',
           idPlanFacturacion:'',

           
        },
        errors:{},
        
        data:{
          resultado:[]
        },
        consulta:{
          Respuesta:undefined,
          Cliente:undefined,
        },
        dataId:
        {
          id_Email:[]
        },
        dataUsuar:{
          resultado:[]
        },
        CorreoCliente:{
          resultado:[]
        },
        CorreoVentas:{
          resultado:[]
        },
        PlanFacturacion:{
          resultado:[]
        }
     
        
    }

    // validate=()=>{
    //          let rucError="";
    //          let clienteError="";
    //          let emailError="";
    //          let telefonoError="";
    //          let ContrasenError="";
    //          let contactoError="";
    //       if(this.state.form.ruc===''){
    //         rucError="invalid ruc";
    //       }

    //       if(rucError){
    //         this.setState({rucError});
    //         return false;
    //       }

    //       if(!this.state.form.email.includes("@")){
    //         emailError=" email error";
    //       } 

    //       if(emailError){
    //         this.setState({emailError});
    //          return false;
    //       }
    //       return true;

    // }
    validateForm() {

      let form = this.state.form;
      let errors = {};
      let formIsValid = true;

      if (!form["ruc"]) {
        formIsValid = false;
        errors["ruc"] = "*Porfavor ingrese su ruc.";
      }

      if (typeof form["ruc"] !== "undefined") {
        if (!form["ruc"].match(/^[0-9]{11}$/)) {
          formIsValid = false;
          errors["ruc"] = "*Ingrese 11 digitos.";
        }
      }

     
      if (!form["email"]) {
        formIsValid = false;
        errors["email"] = "*Ingrese su correo Electronico.";
      }

      if (typeof form["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(form["email"])) {
          formIsValid = false;
          errors["email"] = "*Ingrese de nuevo su correo Electronico.";
        }
      }

      if (!form["telefono"]) {
        formIsValid = false;
        errors["telefono"] = "*Ingrese su numero de telefono.";
      }

      if (typeof form["telefono"] !== "undefined") {
        if (!form["telefono"].match(/^[0-9]{9}$/)) {
          formIsValid = false;
          errors["telefono"] = "*Su numero de Telefono es Incorrecto.";
        }
      }

      if (!form["ContrasenNueva"]) {
        formIsValid = false;
        errors["ContrasenNueva"] = "*Ingrese su contraseña.";
      }

      if (typeof form["ContrasenNueva"] !== "undefined") {
        if (!form["ContrasenNueva"].match(/^[A-Za-z0-9]{5,40}$/)) {
          formIsValid = false;
          errors["ContrasenNueva"] = "*Ingrese de nuevo su contraseña.";
        }
      }
      if (!form["contacto"]) {
        formIsValid = false;
        errors["contacto"] = "*Ingrese su contraseña.";
      }

      if (typeof form["contacto"] !== "undefined") {
        if (!form["contacto"].match(/^[A-Za-z0-9]{5,40}$/)) {
          formIsValid = false;
          errors["contacto"] = "*Ingrese el contacto.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;


    }

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      }; 

      

      handleSubmit = async e => {
        e.preventDefault();
        if (this.validateForm()) {
          let form = {};
          form["ruc"] = "";
          form["email"] = "";
          form["telefono"] = "";
          form["ContrasenNueva"]="";
          form["contacto"]="";
          this.setState({form:form});
          alert("Form submitted");
      }

        this.setState({ loading: true, error: null });

        try{

        // const consul=await apiRUC.cliente.buscar(this.state.form.ruc);
        // //  console.log(consul);
        //   this.setState({loading:false,
        //   consulta:{Respuesta:[].concat(this.state.consulta,consul.Respuesta)},
        //   consultaclie:{Cliente:[].concat(this.state.consulta,consul.Cliente)}
        //   });
        
        //   console.log(this.state.form.idPlanFacturacion);
        //   if(consul.Respuesta==="EXISTE"){
           
            //Guardar clientes
            // this.state.form.cliente=consul.Cliente;
            //  console.log(this.state.form.cliente);
            const Rruc=this.state.form.ruc;
            const Rcliente=this.state.form.cliente;
            const Remail=this.state.form.email;
            const Rtelefono=this.state.form.telefono;
            const Rcontacto=this.state.form.contacto;
            const variables={
              ruc:Rruc,
              cliente:Rcliente,
              email:Remail,
              telefono:Rtelefono,
              contacto:Rcontacto
            };

            //console.log(Rruc);

          // const data=await api.cliente.buscarId(ruc);
          // console.log(data);
          // this.setState({ loading: false,
          //   data:{resultado:[].concat(this.state.data,data.resultado)}
          // });

            const data=await api.cliente.create(variables);
            //console.log(data);
            this.setState({ loading: false,
            data:{resultado:[].concat(this.state.data,data.resultado)}
          });
           
              if(data.resultado===0){
                const ID_EMAIL=await api.cliente.buscarId(this.state.form.ruc);
              //  console.log(ID_EMAIL);
                this.setState({ loading: false,
                  dataId:{id_Email:[].concat(this.state.dataId,ID_EMAIL.id_Email)}
                });
                if(ID_EMAIL!==null) {
                    //Guardar datos en el procedimiento de Usuario
                    const Rusuarionuevo=ID_EMAIL.id_Email["0"]["0"].Email;
                //    console.log(Rusuarionuevo);
                    const Rcontrasennueva=this.state.form.ContrasenNueva;
                    const Ridcliente=ID_EMAIL.id_Email["0"]["0"].Id_Cliente;
                    const variablesUsuario={
                      UsuarioNuevo:Rusuarionuevo,
                      ContrasenNueva:Rcontrasennueva,
                      IdCliente:Ridcliente
                    }
                  //  console.log(variablesUsuario);
                    const dataUsu=await api.usuario.create(variablesUsuario);
                   // console.log(dataUsu);
                    this.setState({ loading: false,
                      dataUsuario:{resultado:[].concat(this.state.dataUsuar,dataUsu.resultado)}
                    });
                    // console.log(this.state.form.idPlanFacturacion);
                    // const  Facturacion=await api.planFacturacion.listarId(this.state.form.idPlanFacturacion);
                    // console.log(Facturacion);
                    // this.setState({ loading:false,
                    // dataFactura:{resultado:[].concat(this.state.PlanFacturacion,Facturacion.resultado)}
                    // });
                    // const Rplan=Facturacion.resultado["0"]["0"].Nombre_Plan;
                    // const Rprecio=Facturacion.resultado["0"]["0"].Precio;
                    //,
                    // plan: Rplan,
                    // precio:Rprecio
                    if(dataUsu.resultado===0){
                        const ventas={
                          ruc:Rruc,
                          cliente:Rcliente,
                          telefono:Rtelefono,
                          contacto:Rcontacto

                        }

                     //   console.log(ventas);
                        const emailVentas=await api.usuario.enviarCorreoVentas(ventas);
                       // console.log(emailVentas);
                        this.setState({loading:false,
                        emailVent:{resultado:[].concat(this.state.CorreoVentas,emailVentas.resultado)}
                      });
                      const client={
                        email:Remail,
                        cliente:Rcliente
                      }
                      const emailCliente=await api.usuario.enviarCorreoCliente(client);
                      //console.log(emailCliente);
                      this.setState({loading:false,
                      emailClin:{resultado:[].concat(this.state.CorreoCliente,emailCliente.resultado)}});

                      this.props.history.push('/sunat');

                    }else{
                      this.setState({ loading: false, error: 'error'});

                    }


                    //this.props.history.push('/sunat');
                    }
                    else{
                      this.setState({ loading: false, error: 'error'});
                      alert('Error en el registro verfica los datos ingresados');
                    }

              }else{
                this.setState({ loading: false, error: 'error'});
               alert('el ruc o el email ya han sido registrados');
                  }

            //  }
              
          // else{

          //   this.setState({ loading: false, error: 'error'});
          //   alert('el ruc no se ha encontrado');
          // }

        }catch (error){
          this.setState({ loading: false, error: error });
        }
      }

     
    
     
    render(){
        return(
            <div className="container">
               <NavProgreso/>
               <Row>
                 <Col md="12">
                    <section id="REmpresa">
                          
                                
                          {this.state.loading&&(
                              <div className="loader"></div>
                            )}
                        
                        <Formulario  onChange={this.handleChange}
                                  onSubmit={this.handleSubmit}
                                  formValues={this.state.form}
                                  errors={this.state.errors}/> 
                      
                    </section>
                 </Col>
               
               </Row>
           
            </div>
        )
    }
}

export default Registro;
