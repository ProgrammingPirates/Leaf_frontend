package com.example.taskmanager.util;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;

public class PaginationUtil {

    public static HttpHeaders generatePaginationHttpHeaders(Page<?> page) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", Long.toString(page.getTotalElements()));
        headers.add("X-Total-Pages", Long.toString(page.getTotalPages()));
        return headers;
    }
}
