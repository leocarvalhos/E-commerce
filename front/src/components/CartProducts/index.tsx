import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Trash from "../../assets/trash.svg";
import styles from "./styles.module.scss";

export default function CartProducts({ product }: any) {
  const [number, setNumber] = useState(1)
  function handleCount(signal: string) {
    if (number >= 1 && signal === '+') {
      return setNumber(number + 1)
    }
    if (number >= 2 && signal === '-') {
      return setNumber(number - 1)
    }
  }
  console.log()
  return (
    
    <tbody className={styles.tbody}>
 
      <tr>
        <td className={styles.tdImage}><img src={product?.image} alt="produto" /></td>
        <td>{product?.title}</td>
        <td>{product?.price}</td>
        <td>
          <div className={styles.count}>
            <div>
              <span onClick={() => handleCount('-')}>-</span>
              {number}
              <span
                onClick={() => handleCount('+')}>+</span>
            </div>
          </div>
        </td>
        <td>{(parseInt(product?.price.split(" ")[1]) * number).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td><Button><img src={Trash} alt="excluir" /></Button></td>
      </tr>
    </tbody>
  )
}

