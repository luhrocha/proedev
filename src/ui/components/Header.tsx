import Link from "next/link";

export default function Header(){
    return(
      <header className='mt-2 border-t-4 border-purple flex flex-row justify-between px-12 bg-gray-100 '>
        <div className='md:m-auto'>
            <Link href={'/'}>
              <img src='./assets/logo.svg' width={'352px'}/>
            </Link>
        </div>
        <nav className='py-6 my-auto'>
            <ul className='flex flex-row justify-end gap-6 md:gap-1 sm:flex-col'>
              <li className='border-r px-6 border-purple sm:border-none'>
                <Link href={'/#about'}>Sobre</Link>                
              </li>
              <li className='border-r px-6 border-purple sm:border-none'>
                <Link href="/#proedev">
                  Proedev
                </Link>                
              </li>
              <li className='border-r px-6 border-purple sm:border-none'>
                <Link href='/#solutions'>Soluções</Link>                
              </li>
              <li className='px-6 '>
                <Link href='/#contact'>Contato</Link>                
              </li>
            </ul>
        </nav>
      </header>
    )
}