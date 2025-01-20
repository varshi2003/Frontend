package com.forms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import com.forms.model.Response;
import com.forms.service.ResponseService;

import java.util.List;

@RestController
@RequestMapping("/api/responses")
public class ResponseController {
    @Autowired
    private ResponseService responseService;

    @GetMapping("/{formId}")
    public List<Response> getResponsesByFormId(@PathVariable String formId) {
        return responseService.getResponsesByFormId(formId);
    }

    @PutMapping("/{id}/approve")
    public Response approveResponse(@PathVariable String id) {
        return responseService.approveResponse(id);
    }

    @GetMapping("/status/{status}")
    public List<Response> filterByStatus(@PathVariable String status) {
        return responseService.filterByStatus(status);
    }
   

}
