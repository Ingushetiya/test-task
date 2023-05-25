import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './styles/FlexibleForm.module.scss';
import style from './styles/checkbox.module.scss';
import DropBox from './DropDown';

const Regist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelName}>
          <span>UserName</span>
          <input
            placeholder="Enter username"
            type="text"
            className={styles.name}
            {...register('name', { required: 'Поле не должно быть пустым', minLength: 5 })}
          />
          <div className={styles.err}> {errors?.name && <span>{errors?.name?.message}</span>}</div>
        </label>

        <label className={styles.labelPassw}>
          <span>Password</span>
          <input
            min={4}
            placeholder="Enter password"
            type="text"
            className={styles.passw}
            {...register('passw', {
              required: 'Your password is between 4 and 12 characters',
              minLength: {
                value: 4,
                message: 'Your password is between 4 and 12 characters',
              },
              maxLength: {
                value: 12,
                message: 'Your password is between 4 and 12 characters',
              },
            })}
          />
          <div className={styles.err}>
            {' '}
            {errors?.passw && <span>{errors?.passw?.message || 'ERROR'}</span>}
          </div>
        </label>
        <div className={styles.inputFieldDiv}>
          <label className={styles.inputField}>
            <span>Input Text Label</span>
            <input
              className={errors.inputField?.message ? styles.errorInput : styles.inputField}
              placeholder="Typing |"
              type="text"
              {...register('inputField', {
                required: 'Error message informing me of a problem',
                minLength: {
                  value: 4,
                  message: 'Error message informing me of a problem',
                },
              })}
            />
            <div className={styles.err}>
              {' '}
              {errors?.inputField && <span>{errors?.inputField?.message || 'ERROR'}</span>}
            </div>
          </label>
        </div>
        <div className={style.formGroup}>
          <input {...register('checkbox')} type="checkbox" id="me" />
          <label for="me">Remember me</label>
        </div>
        <div className={styles.toggle}>
          <input {...register('checkbox2')} type="checkbox" id="switch" />
          <label for="switch">off</label>
          <span>off</span>
        </div>
        <div className={styles.inpRad}>
          <div className={styles.radio}>
            <input {...register('radio1')} id="radio-1" name="radio" type="radio" checked />
            <label for="radio-1" className={styles.radioLabel}>
              Radio selection 1
            </label>
          </div>
          <div className={styles.radio}>
            <input {...register('radio2')} id="radio-2" name="radio" type="radio" checked />
            <label for="radio-2" className={styles.radioLabel}>
              Radio selection 2
            </label>
          </div>
          <div className={styles.radio}>
            <input {...register('radio3')} id="radio-3" name="radio" type="radio" checked />
            <label for="radio-3" className={styles.radioLabel}>
              Radio selection 3
            </label>
          </div>
        </div>
        <div className="dropDown">
          <DropBox {...register('dropBox')} />
        </div>

        <div className={styles.buttons}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.next} onSubmit={onSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Regist;
