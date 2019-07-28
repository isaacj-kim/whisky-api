package wcci.whiskyapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import wcci.whiskyapi.entities.WhiskyBrand;

@Repository
public interface WhiskyBrandRepository extends CrudRepository<WhiskyBrand, Long> {
	WhiskyBrand findByBrandName(String brandName);

}