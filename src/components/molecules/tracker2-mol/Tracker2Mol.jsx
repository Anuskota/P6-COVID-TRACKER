import { DataTable } from '../../../../node_modules/primereact/datatable';
import { Column } from '../../../../node_modules/primereact/column';
import TopTen from '../../../services/TopTen';
import { useState, useEffect } from 'react';


export default function Tracker2Mol() {
  const {
    topTenCases,
  } = TopTen();


  console.log(topTenCases)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    topTenCases.getProductsMini().then(data => setProducts(data));
  }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}

