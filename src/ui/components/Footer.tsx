import Link from "next/link";

export default function Footer(){
    return(
        <footer className=' bg-gray-300'>
        <div className='mx-12 md:mx-6 sm:mx-2 flex flex-row py-6 justify-between sm:flex-col'>
           <div className='flex flex-col'>
             <img src="./assets/logo.png" alt="" width={200}/>
             <p className='max-w-xs'>
             Oferecemos soluções tecnológicas
personalizadas para pequenas e médias 
empresas,  para alavancar seus negócios. 
             </p>
             <Link href={'/privacy-policies'} className='pt-4 text-black'>
              Política de privacidade
            </Link>
           </div>
           <div>
            <h3 className='pb-4 font-bold sm:pb-2'>Menu</h3>
            <ul className='flex flex-col sm:flex-row sm:gap-4'>
              <li><Link href='/#about' scroll={false}>Sobre</Link></li>
              <li><a href='#proedev'>Proedev</a></li>
              <li><a href='#solutions'>Soluções</a></li>
              <li><a href='#contact'>Contato</a></li>
            </ul>          
            
           </div>
           <div>
             <h3 className='pb-4 font-bold sm:pb-2'>Contato</h3>
             <p>E-mail: engcomputacao18@gmail.com</p>
             <p>Instagram: @proedev</p>
             <p>Facebook: @proedev</p>
           </div>
        </div>
        <p className='text-sm py-5 text-center bg-gray-500'>
           2023. Proedev. Programação e Desenvolvimento. Todos os direitos reservados
        </p>
        </footer> 
    )
}