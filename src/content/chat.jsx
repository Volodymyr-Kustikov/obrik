import React from 'react';
import classes from './content.module.css'
const Chat = () => {
    return (
      <div className={classes.chat}>
        <div style={{height:'460px'}} className={classes.sec}>
            <div className={classes.chatname}><p>Працівник ObriSoft</p></div>
            <div className={classes.worker} ><p>Вас вітає бюро перекладів, доброго дня, слухаю Вас 😍</p></div>
            <div className={classes.client}><p>(вислуховуємо клієнта, його потребу та відповідаємо на його питання)</p></div>
            <div className={classes.client}><p>клієнт запитує, чи виконуємо переклади на певну мову, оглядаємо документ «Ціни на послуги перекладу» і відповідаємо клієнту:</p></div>
        </div>
        <div className={classes.sec}>
            <div className={classes.chatname}><p>Працівник ObriSoft</p></div>
            <div className={classes.worker} ><p>Так, ми перекладаємо на таку мову, вартість за стандартний документ становить ______ грн за 1800 символів з пробілами.</p></div>
            <div className={classes.client}><p>(вказати ціну за переклад стандартного документу* на вказану мову.  Надалі, за потреби, можемо пояснити наступне)</p></div>
        </div>
        <div style={{height:'930px'}} className={classes.sec}>
            <div className={classes.chatname}><p>Працівник ObriSoft</p></div>
            <div className={classes.worker} ><p>Інформуємо Вас, що згідно стандартів перекладу в Україні – одна перекладацька сторінка містить 1800 символів з пробілами. Вартість її перекладу становить ____ грн.</p></div>
            <div className={classes.worker}><p>Також, для Вашої зручності, Ви можете надіслати нам на огляд файли на Viber, Telegram для перекладу, ми одразу прорахуємо вартість та терміни – та відпишемо чи перетелефонуємо Вам.</p></div>
            <div className={classes.worker}><p>Наш номер вайбер.</p></div>
            <div className={classes.client}><p>( продиктувати клієнту номер, або вказати, що це номер на який клієнт телефонує )</p></div>
            <div className={classes.description}>
                <p>*стандартний документ – це документ, кількість символів з пробілами якого дорівнює 1800 чи менше. До стандартних документів відносяться: свідоцтва про народження, смерть, шлюб, перші 2 сторінки паспорту, ідентифікаційні коди, довідки про місце роботи та інші документи.</p>
                <p>Якщо документ більшого об'єму, нам важко оцінити його точну вартість, тому рахуємо орієнтовно, скільки може вартувати переклад і відповідаємо клієнту:</p>
            </div>
        </div>
        <div style={{height:'630px'}} className={classes.sec}>
            <div className={classes.chatname}><p>Працівник ObriSoft</p></div>
            <div className={classes.worker} ><p>Орієнтовна вартість перекладу цих файлів _____ грн.</p></div>
            <div className={classes.worker} ><p>Термін виконання: на понеділок.</p></div>
            <div className={classes.worker}><p>Чи влаштовує Вас термін?</p></div>
            <div className={classes.worker}><p>Також можемо засвідчити переклад нашими печатками бюро перекладів.</p></div>
            <div className={classes.client}><p>(за запитом клієнта можемо надіслати скановані документи на пошту/Вайбер чи прийняти/відправити через Нову Пошту)</p></div>
        </div>
        <div style={{height:'1050px'}} className={classes.sec}>
            <div className={classes.chatname}><p>Працівник ObriSoft</p></div>
            <div className={classes.worker} ><p>Якщо Вас все влаштовує, прохання:</p></div>
            <div className={classes.worker}><p>1. Надати написання імен та прізвищ осіб, що вказані у документах, згідно закордонного паспорту. Якщо ці особи не мають закордонних паспортів, і їх імена та прізвища не фігурували у закордонних документах – ми протранслітеруємо написання згідно Закону України «Про транслітерацію».</p></div>
            <div className={classes.worker}><p>2. Ми працюємо за мінімальним авансом, прохання надіслати на вказані реквізити</p></div>
            <div className={classes.client}><p>(умовно 40-50% вартості)</p></div>
            <div style={{textAlign:'center'}} className={classes.description}>
                <h3><b>ВАЖЛИВО!</b></h3>
                <p>Аванс брати завжди! Якщо клієнт самостійно пропонує аванс – обов'язково приймати. Якщо клієнт хвилюється через аванс і залишає при цьому оригінали документів, тоді можна не брати авансу (документи виступають гарантією), тоді повна оплата за клієнтом під час здачі йому перекладу.</p>
            </div>
        </div>
      </div>
    );
  };

export default Chat