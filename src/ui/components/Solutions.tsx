interface SolutionsProps{
    img: string,
    title: string,
    text: string
}

export default function Solutions({ img, title, text} : SolutionsProps){
   return(
      <div className="flex gap-3">
        <div>
          <img src={img} className='w-24 h-24'/>
        </div>
        <div className="w-96">
            <h2 className="font-bold pb-3">{title}</h2>
            <p className="">{text}</p>
        </div>
      </div>
   );
}