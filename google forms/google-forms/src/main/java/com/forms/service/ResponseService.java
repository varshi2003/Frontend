package com.forms.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forms.model.Response;
import com.forms.repository.ResponseRepository;

import java.util.List;

@Service
public class ResponseService {
    @Autowired
    private ResponseRepository responseRepository;

    public List<Response> getResponsesByFormId(String formId) {
        return responseRepository.findByFormId(formId);
    }

    public Response approveResponse(String id) {
        Response response = responseRepository.findById(id).orElse(null);
        if (response != null) {
            response.setStatus("Approved");
            return responseRepository.save(response);
        }
        return null;
    }

    public List<Response> filterByStatus(String status) {
        return responseRepository.findByStatus(status);
    }
}
