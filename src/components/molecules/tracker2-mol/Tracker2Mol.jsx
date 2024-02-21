import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './tracker2Mol.css';
import FetchData from '../../../services/FetchData';

export default function Tracker2Mol() {
  const { data, error } = FetchData('countries');

  const renderFlag = (rowData) => {
    const flagUrl = rowData.countryInfo.flag;   
    console.log(flagUrl)
    return <img src={flagUrl} alt="Flag" style={{ width: '30px' }} />;
  };

  return (
    <div className="container-fluid">
      <div className="row tracker2-container">
      <h1>Ajax Data Table - Covid-19 Country Wise State</h1>
      <div className="table">
        {error ? (
          <h1>Error fetching data</h1>
        ) : data ? (
          <DataTable
          value={data}
          paginator
          className="p-datatable-customers"
          rows={10}
          paginatorTemplate=" CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowsPerPageOptions={[10, 25, 50, 100]}
          dataKey="id"
          rowHover
          filterDisplay="menu"
          globalFilterFields={['country']}
          emptyMessage="No country found."
       >
           <Column field="flag" header="Flag"  body={renderFlag}></Column>
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
   
  );
}
