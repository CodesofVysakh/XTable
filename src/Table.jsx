import { useState } from "react";

export default function Table() {
    const [tableData, setTableData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" },
    ]);

    const handleSort = () => {
        setTableData(
            [...tableData].sort((a, b) => new Date(a.date) - new Date(b.date))
        );
    };
    const handleViews = () => {
        setTableData([...tableData].sort((a, b) => a.views - b.views));
    };

    return (
        <>
            <h1>Date and Views Table</h1>
            <button onClick={handleSort}>Sort by Date</button>
            <button onClick={handleViews}>Sort by Views</button>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                <tbody>
                    {" "}
                    {tableData?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.views}</td>
                            <td>{item.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
