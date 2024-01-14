import '../../../styles/Signup.scss'
const Date = ({setDay, setMonth, setYear, day, month, year}) => {
  return (
    <div className='modal__inputs-date'>
    <select name='day' onChange={e => setDay(e.target.value)} value={day} className='modal__input-date'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
    </select>
    <select name='month' onChange={e => setMonth(e.target.value)} value={month} className='modal__input-date'>
        <option>Января</option>
        <option>Февраля</option>
        <option>Марта</option>
        <option>Апреля</option>
        <option>Мая</option>
        <option>Июня</option>
        <option>Июля</option>
        <option>Августа</option>
        <option>Сентября</option>
        <option>Октября</option>
        <option>Ноября</option>
        <option>Декабря</option>
    </select>
    <select name='year' onChange={e => setYear(e.target.value)} value={year} className='modal__input-date'>
        <option>1953</option>
        <option>1954</option>
        <option>1955</option>
        <option>1956</option>
        <option>1957</option>
        <option>1958</option>
        <option>1959</option>
        <option>1960</option>
        <option>1961</option>
        <option>1962</option>
        <option>1963</option>
        <option>1964</option>
        <option>1965</option>
        <option>1966</option>
        <option>1967</option>
        <option>1968</option>
        <option>1969</option>
        <option>1970</option>
        <option>1971</option>
        <option>1972</option>
        <option>1973</option>
        <option>1974</option>
        <option>1975</option>
        <option>1976</option>
        <option>1977</option>
        <option>1978</option>
        <option>1979</option>
        <option>1980</option>
        <option>1981</option>
        <option>1982</option>
        <option>1983</option>
        <option>1984</option>
        <option>1985</option>
        <option>1986</option>
        <option>1987</option>
        <option>1988</option>
        <option>1989</option>
        <option>1990</option>
        <option>1991</option>
        <option>1992</option>
        <option>1993</option>
        <option>1994</option>
        <option>1995</option>
        <option>1996</option>
        <option>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
      </select>
</div>
  )
}

export default Date