package com.fitmart.backend.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardResponse {

    // Users
    private Long totalUsers;

    // Products
    private Long totalProducts;

    private Long totalCategories;

    // Orders
    private Long totalOrders;

    private Long pendingOrders;

    private Long processingOrders;

    private Long shippedOrders;

    private Long deliveredOrders;

    private Long cancelledOrders;

    // Revenue
    private BigDecimal totalRevenue;

    private BigDecimal todayRevenue;

    private BigDecimal monthlyRevenue;

    // Inventory
    private Long outOfStockProducts;

    private Long lowStockProducts;

    // Reviews
    private Double averageRating;

}