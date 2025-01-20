package com.forms.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.forms.model.Form;

public interface FormRepository extends MongoRepository<Form, String> {
}
