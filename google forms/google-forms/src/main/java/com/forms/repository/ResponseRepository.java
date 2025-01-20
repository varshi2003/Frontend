package com.forms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.forms.model.Response;

import java.util.List;

public interface ResponseRepository extends MongoRepository<Response, String> {
    List<Response> findByFormId(String formId);
    List<Response> findByStatus(String status);
}
