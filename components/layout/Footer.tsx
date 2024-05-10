import Image from "next/image"

function Footer() {
  return (
    <footer className="py-20  max-w-6xl mx-auto ">
      <div id="icon" className="flex flex-col items-center gap-4">
        <Image src={"/pizza-wifi-logo.png"} width={250} height={250} objectFit="contain" alt="logo" />
        <div className="flex w-full">
          <ul className="text-white ml-24">
            <h2>لیست شعب</h2>
            <li>فلکه سنگی به سمت چهار راه هوابرد نبش کوچه 5 سرباز</li>
            <li>شماره ثبت سفارش 07132118</li>
            <li>شعبه مرکزی 07136482141</li>
            <li>شعبه قصردشت 07136302008</li>
            <li>امور نمایندگی ها 09195663681</li>
            <li>شعبه فدک 09055201318</li>
            <li>شعبه کسایی 07136333013</li>
          </ul>
          <ul className="text-white">
            <h2>نماد ها</h2>
          </ul>
        </div>
      </div> 
    </footer>
  )
}

export default Footer