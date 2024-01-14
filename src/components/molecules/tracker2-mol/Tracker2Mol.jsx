import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import './tracker2Mol.css';
import FetchData from '../../../services/FetchData';
import "./tracker2Mol.css"

export default function Tracker2Mol() {
  const { data, error } = FetchData('countries');

  return (
    <div className="tracker2-container">
      <div className="card">
        {error ? (
          <h1>Error fetching data</h1>
        ) : data ? (
          <DataTable value={data} paginator className="p-datatable-customers" rows={10}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50, 100]}
          dataKey="id" rowHover filterDisplay="menu"
          responsiveLayout="scroll"
          globalFilterFields={['country']} emptyMessage="No country found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
            <Column field="flag" header="Flag" style={{ minWidth: '14rem' }}></Column>
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
  );
}
