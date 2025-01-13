import styles from './ItemForm.module.scss'
import useForm from '../../shared/useform/useform'
import Button from '../../shared/buttons'

function ItemForm(props) {
   
   const submit = () => {
      console.log(values)
      alert("SUBMIT")
   }
   const initialState = {
      type: "",
      amount: 0,
      paymentDate: "",
      periodStart: "",
      periodEnd: "",
      receiver: ""
   }
   const { values, handleChange, handleSubmit } = useForm(submit, initialState, false)

   const handleCancel = () => {
      alert('CANCEL')
   }


   return (
      <form onSubmit={handleSubmit}>
         <div className={styles.itemform}>
            <div className={styles.itemform_row}>
               <div>
                  <label htmlFor='type'>Kulutyyppi</label>
                  <select name='type' onChange={handleChange} value={values.type}>
                     <option>Puhelin</option>
                     <option>Sähkö</option>
                     <option>Vesi</option>
                     <option>Vero</option>
                  </select>
               </div>
            </div>
            <div className={styles.itemform_row}>
               <div>
                  <label htmlFor='amount'>Summa</label>
                  <input type='number' name='amount' step='0.01' onChange={handleChange} value={values.amount} />
               </div>
               <div>
                  <label htmlFor='paymentDate'>Maksupäivä</label>
                  <input type='date' name='paymentDate' onChange={handleChange} value={values.paymentDate} />
               </div>
            </div>
            <div className={styles.itemform_row}>
               <div>
                  <label htmlFor='periodStart'>Laskutuskauden alku</label>
                  <input type='date' name='periodStart' onChange={handleChange} value={values.periodStart} />
               </div>
               <div>
                  <label htmlFor='periodEnd'>Laskutuskauden loppu</label>
                  <input type='date' name='periodEnd' onChange={handleChange} value={values.periodEnd} />
               </div>
            </div>
            <div className={styles.itemform_row}>
               <div>
                  <label htmlFor='receiver'>Saaja</label>
                  <input type='text' name='receiver' onChange={handleChange} value={values.receiver} />
               </div>
            </div>
            <div className={styles.itemform_row}>
               <div>
                  <Button onClick={handleCancel}>PERUUTA</Button>
               </div>
               <div>
                  <Button primary type='submit'>LISÄÄ</Button>
               </div>
            </div>
         </div>
      </form>
   )

}

export default ItemForm
