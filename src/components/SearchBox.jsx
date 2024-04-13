import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }){
    return (
        <div className={css.box}>
          <p className={css.text}>Find contacts by name</p>
          <input
          className={css.input}
            type="text"
            value={value}
            onChange={(e) => onFilter(e.target.value)}
          />
        </div>
      );
}