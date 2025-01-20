package com.forms.model;


import lombok.Data;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "responses")
public class Response {
    @Id
    private String id;
    private String formId;
    private List<String> answers;
    private String status; // "Approved" or "Pending"
}
