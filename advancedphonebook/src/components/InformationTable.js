import React from 'react';
import { useSelector } from 'react-redux';
import { tableStyle } from '../styles/styles';

function InformationTable() {
  const books = useSelector((state) => state.books);

  const sortedBooks = [...books].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <table style={tableStyle.table} className="informationTable">
      <thead>
        <tr>
          <th style={tableStyle.tableCell}>First name</th>
          <th style={tableStyle.tableCell}>Last name</th>
          <th style={tableStyle.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sortedBooks.map((book, index) => (
          <tr key={index}>
            <td style={tableStyle.tableCell}>{book.firstName}</td>
            <td style={tableStyle.tableCell}>{book.lastName}</td>
            <td style={tableStyle.tableCell}>{book.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InformationTable;
