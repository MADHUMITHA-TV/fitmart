package com.fitmart.backend.controller;

import com.fitmart.backend.dto.request.CategoryRequest;
import com.fitmart.backend.dto.response.ApiResponse;
import com.fitmart.backend.dto.response.CategoryResponse;
import com.fitmart.backend.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity<ApiResponse<CategoryResponse>> create(
            @Valid @RequestBody CategoryRequest request) {

        CategoryResponse response =
                categoryService.create(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(
                        "Category created successfully",
                        response
                ));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CategoryResponse>>> getAll() {

        return ResponseEntity.ok(
                ApiResponse.success(categoryService.getAll())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CategoryResponse>> getById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                ApiResponse.success(
                        categoryService.getById(id)
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CategoryResponse>> update(
            @PathVariable Long id,
            @Valid @RequestBody CategoryRequest request) {

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Category updated successfully",
                        categoryService.update(id, request)
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(
            @PathVariable Long id) {

        categoryService.delete(id);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "Category deleted successfully",
                        null
                )
        );
    }
}