import React, { useState } from 'react';
import 'css/System/SystemTime.css';

export default function SystemTime({ t, config, setConfig }) {
   const handleSubmit = (e) => {};
   const [currentTime, setcurrentTime] = useState(
      new Date(config.currentTime).toDateString()
   );

   return (
      <article>
         <div className='tplinkBoxBase1'>
            <div className='InfoTableTitle'>{t('SystemTime')}</div>
            <div className='timeTableInfo'>
               <span>Current System Date: {currentTime}</span>
               <span>Current Time Source: {config.timeSource}</span>
            </div>
            <div className='InfoTableTitle'>{t('Info_SystemTimeConfig')}</div>
            <div>
               <span>
                  <input type='radio' name='timeSource' value='Manual' />
                  Manual
               </span>
               <span>
                  <input type='radio' name='timeSource' value='NTP' />
                  NTP Server
                  <form onSubmit={handleSubmit} className='tplinkFormBase1'>
                     <span>
                        {t('Info_TimeZone')}:
                        <select className='selectTplink'>
                           <option value='Hawaii'>(GMT-10:00) Hawaii</option>
                           <option value='Alaska'>(GMT-09:00) Alaska</option>
                           <option value='Pacific Time (US &amp; Canada)'>
                              (GMT-08:00) Pacific Time (US &amp; Canada)
                           </option>
                           <option value='Arizona'>(GMT-07:00) Arizona</option>
                           <option value='Mountain Time (US &amp; Canada)'>
                              (GMT-07:00) Mountain Time (US &amp; Canada)
                           </option>
                           <option
                              value='Central Time (US &amp; Canada)'
                              selected='selected'
                           >
                              (GMT-06:00) Central Time (US &amp; Canada)
                           </option>
                           <option value='Eastern Time (US &amp; Canada)'>
                              (GMT-05:00) Eastern Time (US &amp; Canada)
                           </option>
                           <option value='Indiana (East)'>
                              (GMT-05:00) Indiana (East)
                           </option>
                           <option value='' disabled='disabled'>
                              -------------
                           </option>
                           <option value='International Date Line West'>
                              (GMT-11:00) International Date Line West
                           </option>
                           <option value='Midway Island'>
                              (GMT-11:00) Midway Island
                           </option>
                           <option value='Samoa'>(GMT-11:00) Samoa</option>
                           <option value='Tijuana'>(GMT-08:00) Tijuana</option>
                           <option value='Chihuahua'>
                              (GMT-07:00) Chihuahua
                           </option>
                           <option value='Mazatlan'>
                              (GMT-07:00) Mazatlan
                           </option>
                           <option value='Central America'>
                              (GMT-06:00) Central America
                           </option>
                           <option value='Guadalajara'>
                              (GMT-06:00) Guadalajara
                           </option>
                           <option value='Mexico City'>
                              (GMT-06:00) Mexico City
                           </option>
                           <option value='Monterrey'>
                              (GMT-06:00) Monterrey
                           </option>
                           <option value='Saskatchewan'>
                              (GMT-06:00) Saskatchewan
                           </option>
                           <option value='Bogota'>(GMT-05:00) Bogota</option>
                           <option value='Lima'>(GMT-05:00) Lima</option>
                           <option value='Quito'>(GMT-05:00) Quito</option>
                           <option value='Caracas'>(GMT-04:30) Caracas</option>
                           <option value='Atlantic Time (Canada)'>
                              (GMT-04:00) Atlantic Time (Canada)
                           </option>
                           <option value='La Paz'>(GMT-04:00) La Paz</option>
                           <option value='Santiago'>
                              (GMT-04:00) Santiago
                           </option>
                           <option value='Newfoundland'>
                              (GMT-03:30) Newfoundland
                           </option>
                           <option value='Brasilia'>
                              (GMT-03:00) Brasilia
                           </option>
                           <option value='Buenos Aires'>
                              (GMT-03:00) Buenos Aires
                           </option>
                           <option value='Georgetown'>
                              (GMT-03:00) Georgetown
                           </option>
                           <option value='Greenland'>
                              (GMT-03:00) Greenland
                           </option>
                           <option value='Mid-Atlantic'>
                              (GMT-02:00) Mid-Atlantic
                           </option>
                           <option value='Azores'>(GMT-01:00) Azores</option>
                           <option value='Cape Verde Is.'>
                              (GMT-01:00) Cape Verde Is.
                           </option>
                           <option value='Casablanca'>(GMT) Casablanca</option>
                           <option value='Dublin'>(GMT) Dublin</option>
                           <option value='Edinburgh'>(GMT) Edinburgh</option>
                           <option value='Lisbon'>(GMT) Lisbon</option>
                           <option value='London'>(GMT) London</option>
                           <option value='Monrovia'>(GMT) Monrovia</option>
                           <option value='Amsterdam'>
                              (GMT+01:00) Amsterdam
                           </option>
                           <option value='Belgrade'>
                              (GMT+01:00) Belgrade
                           </option>
                           <option value='Berlin'>(GMT+01:00) Berlin</option>
                           <option value='Bern'>(GMT+01:00) Bern</option>
                           <option value='Bratislava'>
                              (GMT+01:00) Bratislava
                           </option>
                           <option value='Brussels'>
                              (GMT+01:00) Brussels
                           </option>
                           <option value='Budapest'>
                              (GMT+01:00) Budapest
                           </option>
                           <option value='Copenhagen'>
                              (GMT+01:00) Copenhagen
                           </option>
                           <option value='Ljubljana'>
                              (GMT+01:00) Ljubljana
                           </option>
                           <option value='Madrid'>(GMT+01:00) Madrid</option>
                           <option value='Paris'>(GMT+01:00) Paris</option>
                           <option value='Prague'>(GMT+01:00) Prague</option>
                           <option value='Rome'>(GMT+01:00) Rome</option>
                           <option value='Sarajevo'>
                              (GMT+01:00) Sarajevo
                           </option>
                           <option value='Skopje'>(GMT+01:00) Skopje</option>
                           <option value='Stockholm'>
                              (GMT+01:00) Stockholm
                           </option>
                           <option value='Vienna'>(GMT+01:00) Vienna</option>
                           <option value='Warsaw'>(GMT+01:00) Warsaw</option>
                           <option value='West Central Africa'>
                              (GMT+01:00) West Central Africa
                           </option>
                           <option value='Zagreb'>(GMT+01:00) Zagreb</option>
                           <option value='Athens'>(GMT+02:00) Athens</option>
                           <option value='Bucharest'>
                              (GMT+02:00) Bucharest
                           </option>
                           <option value='Cairo'>(GMT+02:00) Cairo</option>
                           <option value='Harare'>(GMT+02:00) Harare</option>
                           <option value='Helsinki'>
                              (GMT+02:00) Helsinki
                           </option>
                           <option value='Istanbul'>
                              (GMT+02:00) Istanbul
                           </option>
                           <option value='Jerusalem'>
                              (GMT+02:00) Jerusalem
                           </option>
                           <option value='Kyiv'>(GMT+02:00) Kyiv</option>
                           <option value='Minsk'>(GMT+02:00) Minsk</option>
                           <option value='Pretoria'>
                              (GMT+02:00) Pretoria
                           </option>
                           <option value='Riga'>(GMT+02:00) Riga</option>
                           <option value='Sofia'>(GMT+02:00) Sofia</option>
                           <option value='Tallinn'>(GMT+02:00) Tallinn</option>
                           <option value='Vilnius'>(GMT+02:00) Vilnius</option>
                           <option value='Baghdad'>(GMT+03:00) Baghdad</option>
                           <option value='Kuwait'>(GMT+03:00) Kuwait</option>
                           <option value='Moscow'>(GMT+03:00) Moscow</option>
                           <option value='Nairobi'>(GMT+03:00) Nairobi</option>
                           <option value='Riyadh'>(GMT+03:00) Riyadh</option>
                           <option value='St. Petersburg'>
                              (GMT+03:00) St. Petersburg
                           </option>
                           <option value='Volgograd'>
                              (GMT+03:00) Volgograd
                           </option>
                           <option value='Tehran'>(GMT+03:30) Tehran</option>
                           <option value='Abu Dhabi'>
                              (GMT+04:00) Abu Dhabi
                           </option>
                           <option value='Baku'>(GMT+04:00) Baku</option>
                           <option value='Muscat'>(GMT+04:00) Muscat</option>
                           <option value='Tbilisi'>(GMT+04:00) Tbilisi</option>
                           <option value='Yerevan'>(GMT+04:00) Yerevan</option>
                           <option value='Kabul'>(GMT+04:30) Kabul</option>
                           <option value='Ekaterinburg'>
                              (GMT+05:00) Ekaterinburg
                           </option>
                           <option value='Islamabad'>
                              (GMT+05:00) Islamabad
                           </option>
                           <option value='Karachi'>(GMT+05:00) Karachi</option>
                           <option value='Tashkent'>
                              (GMT+05:00) Tashkent
                           </option>
                           <option value='Chennai'>(GMT+05:30) Chennai</option>
                           <option value='Kolkata'>(GMT+05:30) Kolkata</option>
                           <option value='Mumbai'>(GMT+05:30) Mumbai</option>
                           <option value='New Delhi'>
                              (GMT+05:30) New Delhi
                           </option>
                           <option value='Kathmandu'>
                              (GMT+05:45) Kathmandu
                           </option>
                           <option value='Almaty'>(GMT+06:00) Almaty</option>
                           <option value='Astana'>(GMT+06:00) Astana</option>
                           <option value='Dhaka'>(GMT+06:00) Dhaka</option>
                           <option value='Novosibirsk'>
                              (GMT+06:00) Novosibirsk
                           </option>
                           <option value='Sri Jayawardenepura'>
                              (GMT+06:00) Sri Jayawardenepura
                           </option>
                           <option value='Rangoon'>(GMT+06:30) Rangoon</option>
                           <option value='Bangkok'>(GMT+07:00) Bangkok</option>
                           <option value='Hanoi'>(GMT+07:00) Hanoi</option>
                           <option value='Jakarta'>(GMT+07:00) Jakarta</option>
                           <option value='Krasnoyarsk'>
                              (GMT+07:00) Krasnoyarsk
                           </option>
                           <option value='Beijing'>(GMT+08:00) Beijing</option>
                           <option value='Chongqing'>
                              (GMT+08:00) Chongqing
                           </option>
                           <option value='Hong Kong'>
                              (GMT+08:00) Hong Kong
                           </option>
                           <option value='Irkutsk'>(GMT+08:00) Irkutsk</option>
                           <option value='Kuala Lumpur'>
                              (GMT+08:00) Kuala Lumpur
                           </option>
                           <option value='Perth'>(GMT+08:00) Perth</option>
                           <option value='Singapore'>
                              (GMT+08:00) Singapore
                           </option>
                           <option value='Taipei'>(GMT+08:00) Taipei</option>
                           <option value='Ulaan Bataar'>
                              (GMT+08:00) Ulaan Bataar
                           </option>
                           <option value='Urumqi'>(GMT+08:00) Urumqi</option>
                           <option value='Osaka'>(GMT+09:00) Osaka</option>
                           <option value='Sapporo'>(GMT+09:00) Sapporo</option>
                           <option value='Seoul'>(GMT+09:00) Seoul</option>
                           <option value='Tokyo'>(GMT+09:00) Tokyo</option>
                           <option value='Yakutsk'>(GMT+09:00) Yakutsk</option>
                           <option value='Adelaide'>
                              (GMT+09:30) Adelaide
                           </option>
                           <option value='Darwin'>(GMT+09:30) Darwin</option>
                           <option value='Brisbane'>
                              (GMT+10:00) Brisbane
                           </option>
                           <option value='Canberra'>
                              (GMT+10:00) Canberra
                           </option>
                           <option value='Guam'>(GMT+10:00) Guam</option>
                           <option value='Hobart'>(GMT+10:00) Hobart</option>
                           <option value='Melbourne'>
                              (GMT+10:00) Melbourne
                           </option>
                           <option value='Port Moresby'>
                              (GMT+10:00) Port Moresby
                           </option>
                           <option value='Sydney'>(GMT+10:00) Sydney</option>
                           <option value='Vladivostok'>
                              (GMT+10:00) Vladivostok
                           </option>
                           <option value='Magadan'>(GMT+11:00) Magadan</option>
                           <option value='New Caledonia'>
                              (GMT+11:00) New Caledonia
                           </option>
                           <option value='Solomon Is.'>
                              (GMT+11:00) Solomon Is.
                           </option>
                           <option value='Auckland'>
                              (GMT+12:00) Auckland
                           </option>
                           <option value='Fiji'>(GMT+12:00) Fiji</option>
                           <option value='Kamchatka'>
                              (GMT+12:00) Kamchatka
                           </option>
                           <option value='Marshall Is.'>
                              (GMT+12:00) Marshall Is.
                           </option>
                           <option value='Wellington'>
                              (GMT+12:00) Wellington
                           </option>
                           <option value="Nuku'alofa">
                              (GMT+13:00) Nuku'alofa
                           </option>
                        </select>
                     </span>

                     <span>
                        {t('Info_PrimaryServer')}:
                        <input className='basicInput' type='text' />
                        <input
                           type='submit'
                           className='moveRight'
                           value={'Apply'}
                        />
                     </span>
                     <span>
                        {t('Info_SecoundaryServer')}:
                        <input className='basicInput' type='text' />
                        <input
                           type='submit'
                           className='moveRight'
                           value={'Refresh'}
                        />
                     </span>
                     <span>
                        {t('Info_UpdateRate')}:
                        <input className='basicInput' type='number' />
                        <input
                           type='submit'
                           className='moveRight'
                           value={'Help'}
                        />
                     </span>
                  </form>
               </span>
               <span>
                  <input type='radio' name='timeSource' value='Local' />
                  Synchronize with PC's Clock
               </span>
            </div>
            <div className='note'></div>
         </div>
      </article>
   );
}
