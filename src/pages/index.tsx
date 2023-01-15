import Link from 'next/link'
import { FormHTMLAttributes } from 'react';
import Solutions from '../ui/components/Solutions'
import {CaretCircleUp} from 'phosphor-react'

export default function Index() {
  const solutions = [
    {    
      img : "./assets/browsers-duotone.png",
      title :"Site Institucional",
      text : "Deseja mostrar seu trabalho para o mundo? Você precisa ter um site na internet, com ele você vai poder divulgar seus produtos e serviços e conseguir atrair clientes de forma mais simples e rápida."
   },
   {
    img: "./assets/shopping-cart-simple-duotone.png",
    title: "E-commerce",
    text:"Deseja mostrar seu trabalho para o mundo? Você precisa ter um site na internet, com ele você vai poder divulgar seus produtos e serviços e conseguir atrair clientes de forma mais simples e rápida."
   },
   {
    img: "./assets/activity-duotone.png",
    title: "Sistema de Gestão Comercial",
    text:"Deseja mostrar seu trabalho para o mundo? Você precisa ter um site na internet, com ele você vai poder divulgar seus produtos e serviços e conseguir atrair clientes de forma mais simples e rápida."
   },
   {
    img: "./assets/device-mobile-duotone.png",
    title: "Sistemas mobile",
    text:"Deseja mostrar seu trabalho para o mundo? Você precisa ter um site na internet, com ele você vai poder divulgar seus produtos e serviços e conseguir atrair clientes de forma mais simples e rápida."
   }

];

function handleEmail(event:HTMLFormElement){
  event.preventDefault();
}

  return (
    <>
      <div className='fixed bottom-4 right-6 cursor-pointer z-10'>
        <Link href={'/'}>
          <CaretCircleUp className='' size={48} weight='duotone'/>        
        </Link>
      </div> 
      <section id='about' className='mx-12 pb-20  bg-gray-200 flex justify-between md:mx-6 sm:mx-0 md:flex-col'>
        <div className='p-16 text-center'>
          <p className='text-5xl font-bold max-w-xl'>Desenvolvimento de soluções para o seu negócio</p>
          <button className='mt-16 text-2xl w-80 h-14 hover:brightness-150'>Faça seu orçamento</button>
        </div>
        <div className='mt-9 w-[518px] min-h-[320px] bg-gray-100'>

        </div>
      </section>      
      <section id='proedev' className='bg-gray-100 mx-12 md:mx-6 sm:mx-0 pb-16'>
        <h1>Somos a PROEDEV</h1>
        <div className='flex flex-row px-6 gap-6 md:flex-col md:text-center'>
          <img src='./assets/people.jpg' width={'420px'} className='md:mx-auto'/>
          <div className=''>
            <p className='text-xl text-left pb-10'>
              A Proedev é um grupo composto por sete engenheiros: Denis Henrique, 
              Hugo Teodoro, Júlio Cesar, Lara Fernanda, Luana Rocha, Maciel Oliveira e Maycon Pereira, que se conheceram durante o curso de Engenharia da 
              Computação, na Univesp, e que decidiram integrar seus conhecimentos
              para suprir as necessidades tecnológias de empresas da região.
              O grupo tem especialistas nas áreas de web, mobile e desktop e através 
              da tecnologia ofere soluções para pequenas e médias empresas 
              alavancarem seus negócios.
            </p>
            <button className='hover:brightness-150'>Contate-nos</button>
          </div>
        </div>
        
      </section>      
      <section id='solutions' className='bg-gray-200 mx-12 md:mx-6 sm:mx-0 pb-11'>
        <h1>A Tranquilidade e Confiança que você precisa</h1>
        <h3 className='text-center text-lg font-thin mt-[-35px]'>Se preocupe com o modelo de negócios que cuidamos da parte tecnológica. Conheça nossas soluções!</h3>

        <div className='mt-24 md:mt-12 mx-16 grid grid-cols-2 gap-32 md:gap-16 md:grid-cols-1'>
          {
            solutions.map((item) => {
              return <Solutions key={item.title} img={item.img} title={item.title} text={item.text} />
            })
          }
        </div>    
      
      </section>
      <section id='contact' className='bg-gray-100 mx-12 md:mx-6 sm:mx-0 pb-4'>
        <h1 className='text-purple'>Ligamos para você!</h1>
        <h2 className='mt-[-40px] text-xl text-center pb-6 font-thin'>Preencha o formulário e entraremos em contato com as melhores ofertas para você entrar de vez no mundo da tecnologia.</h2>
      <div className='flex flex-row px-3 md:flex-col md:text-center'>
        <img src="./assets/smartphone.jpg" alt="" className="md:hidden w-96" />

        <form className='w-full bg-gray-500 p-10 md:p-2 m-auto ' onSubmit={handleEmail}>
          <fieldset className='flex justify-between gap-4  md:gap-8 sm:flex-col'>
            <input placeholder='Nome' type="text" name="name" id="name" className='w-full' />
            <input placeholder='Empresa' type="text" name="business" id="business" className='w-full'  />      
          </fieldset>          
          
          <fieldset className='my-7  flex justify-between gap-3 md:gap-8 sm:flex-col'>
            <input placeholder='Telefone' type="tel" name="phone-number" id="phone-number" className='w-full'/>
            <input placeholder='E-mail' type="email" name="email" id="email" className='w-full'/>           
          </fieldset>

          <fieldset className=''>
            <textarea className='w-full bg-gray-200' placeholder='Deixe uma mensagem para nós' name="message" id="" cols={30} rows={10}></textarea>
          </fieldset>

          <fieldset className='mt-5 flex flex-row'>
            <input className='w-6 h-6' type="checkbox" name="agrement" id="agrement" />
             <p className='text-base pl-3'>
              Ao informar os dados, eu concordo com a <Link href={'/privacy-policies'} className='pt-4 text-black'>
              Política de privacidade
            </Link>
             </p>
          </fieldset>

          <input className='mt-10 hover:brightness-150' type="submit" value="Solicitar contato" />
        </form>
      </div>
      </section>      
    </>
  )
}
