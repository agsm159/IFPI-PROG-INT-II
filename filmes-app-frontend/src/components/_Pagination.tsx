import { PaginationStyle } from "../styles/components/Pagination";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface IProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
}

export default function Pagination(props: IProps) {

  const currentPage = props.offset ? (props.offset / props.limit) + 1 : 1;
  const totalPages = Math.ceil(props.total / props.limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page: number) {
    props.setOffset((page - 1) * props.limit);
  }

  return (
    <PaginationStyle>
      <ul>
        <li>
          <button onClick={() => {onPageChange(currentPage - 1)}} 
            disabled={currentPage === 1}>
            Anterior
          </button>
        </li>
        {
          Array.from({length: Math.min(MAX_ITEMS, totalPages)})
            .map((_, index) => index + firstPage )
            .map((page) => (
              <li key={page}>
                <button 
                className = {currentPage === page ? "__item--active" : ""} 
                onClick={() => {
                 onPageChange(page);
                }}>
                  {page}
                </button>
              </li>
            ))
        }
        <li>
          <button onClick={() => {onPageChange(currentPage + 1)}} 
            disabled={currentPage === totalPages}>
            Próximo
          </button>
        </li>
      </ul>
    </PaginationStyle> 
  );
}
              