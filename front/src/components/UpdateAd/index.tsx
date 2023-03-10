import { Button, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Textarea } from '@chakra-ui/react';
import styles from "./styles.module.scss";
import UploadImage from "../../assets/addImage.svg";
import { useState } from 'react';
export default function UpdateAt() {
  const [uploadImage, setUploadImage]: any = useState("")
  function handleUploadImage(e: any) {
   setUploadImage(e.target.files[0])
  }
  
  return (
    <main className={styles.main}>
      <section>
        <form>
        <h1>Editar Produto</h1>
          <div className={styles.titleAndCategory}>
          <FormControl className={styles.title}>
            <FormLabel>Título</FormLabel>
            <Input type='text' placeholder='Nome do produto' />
          </FormControl>
          <FormControl className={styles.select}> 
          <FormLabel>Categoria</FormLabel>
              <Select required>
              <option value="" disabled selected>Selecione...</option>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
          </div>
          <FormControl>
          <FormLabel>Descrição do produto</FormLabel>
            <Textarea placeholder='Ex.: Camiseta branca, Tamanho G' className={styles.textField} />
            </FormControl>
          <div className={styles.priceAndStock}>
            <FormControl>
              <FormLabel className={styles.price}>Preço</FormLabel>
              <Input type='text' placeholder='R$' />
            </FormControl>
          <FormControl>
              <FormLabel className={styles.stock}> Estoque</FormLabel>
            <NumberInput max={1000000} min={1}>
              <NumberInputField placeholder='Ex: 10'/>
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </FormControl>
            </div>
          <FormControl>
            <FormLabel>Adicionar foto</FormLabel>
            <div className={styles.upload}>
            {uploadImage ? <img src={URL.createObjectURL(uploadImage)} width='100%' height='100%' alt="foto do produto" /> : <img src={ UploadImage} alt="adicione a foto do seu produto" />}
              <Input type='file' name="" className={styles.inputFile} onChange={ handleUploadImage} />
            </div>
          </FormControl>
        </form>
        <div className={styles.btns}>
          <Button style={{color: "#fff", background: "#B7005C"}}>Publicar anúncio</Button>
          <Button>Cancelar</Button>
          </div>
      </section>
    </main>
  )
}

