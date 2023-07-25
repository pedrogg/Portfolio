import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
//service_upmyc4q
//template_m65hbkk
//BQ3jw7lrT7XmlAJV3
const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  });
  const [loading,setLoading]=useState(false);
  const handleChange = (e) => {
    const {name,value}= e.target;
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_upmyc4q",
      "template_m65hbkk",
      {
        from_name:form.name,
        to_name:"Pedro",
        from_email:form.email,
        to_email:"pedroggwork@gmail.com",
        message:form.message
      },
      "BQ3jw7lrT7XmlAJV3"
      )
      .then(() => {
        setLoading(false);
        alert("Gracias. Te contactaré en cuanto me sea posible.");
        setForm({
          name:"",
          email:"",
          message:"",
        })
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert("No se ha podido realizar el envio.")
      })

  }
  return (

    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>
            Contacta conmigo
          </p>
          <h3 className={styles.sectionHeadText}>
            Correo automático
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Nombre</span>
                <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="¿Cuál es tu nombre?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Correo</span>
                <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="¿Cuál es tu correo?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Mensaje</span>
                <textarea 
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Contenido del mensaje"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                />
              </label>
              <button 
                type="submit"
                className='bg-tertiary py-3 px-8 outline-none w-fit font-bold text-white shadow-primary rounded-xl'
                >
                  {loading ? "Enviado..." : "Enviar"}
                </button>
            </form>
      </motion.div>
      <motion.div
       variants={slideIn("right","tween",0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")