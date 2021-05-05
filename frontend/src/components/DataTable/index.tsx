const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Yrli Moreira</td>
                        <td>24</td>
                        <td>35</td>
                        <td>15548.59</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Lais Lima</td>
                        <td>43</td>
                        <td>52</td>
                        <td>18017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Caio Lima</td>
                        <td>26</td>
                        <td>48</td>
                        <td>23958.56</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;