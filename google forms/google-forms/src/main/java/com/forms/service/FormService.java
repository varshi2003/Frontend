

package com.forms.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forms.model.Form;
import com.forms.repository.FormRepository;

import java.util.List;

@Service
public class FormService {
    @Autowired
    private FormRepository formRepository;

    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    public Form createForm(Form form) {
        return formRepository.save(form);
    }

    public Form getFormById(String id) {
        return formRepository.findById(id).orElse(null);
    }
}
