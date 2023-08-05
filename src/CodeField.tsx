import  { FC } from 'react'

interface CodeFieldProps {
  stringArray:string[],
  barClicked:boolean,
  QRClicked :boolean
}

const CodeField: FC<CodeFieldProps> = ({stringArray,barClicked,QRClicked  }) => {
    return (
    <div className=' m-3 h-96'>
     {stringArray.map(function (items){
      return(<div key={items} className='flex flex-row'>
            {barClicked &&  <img src={"https://barcode.tec-it.com/barcode.ashx?data="  + items} 
             className={"ml-3 my-6 h-4  object-fill " +
          ((items.length>12) ? "w-32" : ((items.length>6) ? "w-24" : ((items.length>2) ? "w-12" : "w-8")))
              }/> }
{QRClicked && <div className='flex flex-row items-center'>
<img src={"https://qrcode.tec-it.com/API/QRCode?data="  + items} className="ml-12 my-6 w-4 "/>
 <p className='text-xs text-[4px] ml-[1px]'>{items}</p>
 </div>
     }

        </div>)
     })}
    </div>
  )
}

export default CodeField;