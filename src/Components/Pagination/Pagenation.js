import React, { useState } from 'react';
import { Pagination } from 'antd';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Thực hiện các hành động khi trang thay đổi, ví dụ: lấy dữ liệu mới từ API
  };

  const handleSizeChange = (current, size) => {
    setPageSize(size);
    // Thực hiện các hành động khi kích thước trang thay đổi, ví dụ: lấy dữ liệu mới từ API với kích thước mới
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          onClick={() => handlePageChange(i)}
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
      total={100} // Tổng số phần tử trong danh sách
    //   showSizeChanger
    //   showQuickJumper
    //   hideOnSinglePage
      onChange={handlePageChange}
      onShowSizeChange={handleSizeChange}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {renderPageNumbers()}
    </Pagination>
  );
};

export default PaginationComponent;
