package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.OrderDto;
import br.com.fernandinesuplementos.loja.DTOs.OrderItemDto;
import br.com.fernandinesuplementos.loja.entities.*;
import br.com.fernandinesuplementos.loja.repositories.OrderItemRepository;
import br.com.fernandinesuplementos.loja.repositories.OrderRepository;
import br.com.fernandinesuplementos.loja.repositories.ProductRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private OrderItemRepository orderItemRepository;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private AuthService authService;

    @Transactional(readOnly = true)
    public OrderDto findById(Long id) {
        Order order = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));
        //authService.validateSelfOrAdmin(order.getClient().getId());
        return new OrderDto(order);
    }

    @Transactional
	public OrderDto insert(OrderDto dto) {
		
    	Order order = new Order();
    	
    	order.setMoment(Instant.now());
    	order.setStatus(OrderStatus.WAITING_PAYMENT);
    	
    	User user = userService.authenticated();
    	order.setClient(user);
    	
    	for (OrderItemDto itemDto : dto.getItems()) {
    		Product product = productRepository.getReferenceById(itemDto.getProductId());
    		OrderItem item = new OrderItem(order, product, itemDto.getQuantity(), product.getUnitPrice());
    		order.getItems().add(item);
    	}
    	
    	repository.save(order);
    	orderItemRepository.saveAll(order.getItems());
    	
    	return new OrderDto(order);
	}
}
