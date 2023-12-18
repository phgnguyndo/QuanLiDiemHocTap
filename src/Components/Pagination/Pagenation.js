import React, { useState } from 'react';
import { Pagination } from 'antd';

const PaginationComponent = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    props.onPageChange(page); // Notify the parent component about the page change
  };

  const handleSizeChange = (size) => {
    setPageSize(size);
    props.onSizeChange(size); // Notify the parent component about the page size change
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          // onClick={() => handlePageChange(i)}
          style={{ border: i === currentPage ? '1px solid #1890ff' : '1px solid #d9d9d9' }}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };

  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={20} // Tổng số phần tử trong danh sách
      // showSizeChanger
      hideOnSinglePage
      onChange={handlePageChange}
      onShowSizeChange={handleSizeChange}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {renderPageNumbers()}
    </Pagination>
  );
};

export default PaginationComponent;
