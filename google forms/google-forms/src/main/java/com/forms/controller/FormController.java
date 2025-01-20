package com.forms.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.forms.model.Form;
import com.forms.service.FormService;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
public class FormController {
    @Autowired
    private FormService formService;

    @GetMapping
    public List<Form> getAllForms() {
        return formService.getAllForms();
    }

    @PostMapping
    public Form createForm(@RequestBody Form form) {
        return formService.createForm(form);
    }
}
