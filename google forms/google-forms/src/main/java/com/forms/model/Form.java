package com.forms.model;



import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "forms")
public class Form {
    @Id
    private String id;
    private String title;
    private List<String> questions; 
    private boolean isActive;
}
