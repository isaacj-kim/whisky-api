package wcci.whiskyapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import wcci.whiskyapi.entities.WhiskyType;

@Repository
public interface WhiskyTypeRepository extends CrudRepository <WhiskyType, Long> {
	
	WhiskyType findByName(String name);

}