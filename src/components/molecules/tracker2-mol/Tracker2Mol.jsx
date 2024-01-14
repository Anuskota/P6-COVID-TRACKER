import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import './tracker2Mol.css';
import FetchData from '../../../services/FetchData';
import "./tracker2Mol.css"

export default function Tracker2Mol() {
  const { data, error } = FetchData('countries');
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState({
    'country': { value: null, matchMode: FilterMatchMode.CONTAINS },
});

  const renderFlag = (rowData) => {
    const flagUrl = rowData.countryInfo.flag;   
    console.log(flagUrl)
    return <img src={flagUrl} alt="Flag" style={{ width: '30px' }} />;
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
}
  const renderHeader = () => {
    return (
        <div className="flex justify-content-end align-items-center">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
            </span>
        </div>
    )
}

const header = renderHeader();

  return (
    <div className="container-fluid">
      <div className="row">
      <div className=" tracker2-container">
      <h1>Ajax Data Table - Covid-19 Country Wise State</h1>
      <div className="table">
        {error ? (
          <h1>Error fetching data</h1>
        ) : data ? (
          <DataTable
          value={data}
          paginator
          className="p-datatable-customers"
          header={header}
          rows={10}
          paginatorTemplate=" CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowsPerPageOptions={[10, 25, 50, 100]}
          dataKey="id"
          rowHover
          filterDisplay="menu"
          scrollable
          scrollHeight="400px"
          scrollDirection="both"
          globalFilterFields={['country']}
          emptyMessage="No country found."
        >
           <Column field="flag" header="Flag"  body={renderFlag}  style={{ minWidth: '14rem' }}></Column>
            <Column field="country" header="Country" sortable/>
            <Column field="cases" header="Cases" sortable></Column>
            <Column field="todayCases" header="New Cases" sortable></Column>
            <Column field="deaths" header="Deaths" sortable></Column>
            <Column field="todayDeaths" header="New Deaths" sortable></Column>
            <Column field="recovered" header="Recovered" sortable></Column>
            <Column field="active" header="Active" sortable></Column>
            <Column field="critical" header="Critical" sortable></Column>
            <Column field="tests" header="Tested" sortable></Column>
          </DataTable>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
      </div>
    </div>
   
  );
}
